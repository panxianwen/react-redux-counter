import React from 'react';

var PropTypes = React.PropTypes;

var prefix = '_ks_cookie_';

var Cookie = React.createClass({
    statics: {
        //默认cookie的保存时间为24小时
        set: function (key, value, time) {
            let newkey = prefix + key;
            let argLen = arguments.length;

            if(3 == argLen){
                //如果方法有time参数，则在cookie过期后清除信息
                let strsec = this.getsec(time);
                let exp = new Date();
                exp.setTime(exp.getTime() + strsec*1);

                window.document.cookie = newkey + "="+ this.compile(JSON.stringify(value)) + ";expires=" + exp.toGMTString()+";path="+'/';
            }else{
                //否则当用户关闭浏览器时cookie失效
                window.document.cookie = newkey + "="+ this.compile(JSON.stringify(value)) +";path="+'/';
            }

        },
        get: function (key) {
            let newkey = prefix + key;
            var arr,reg=new RegExp("(^| )"+newkey+"=([^;]*)(;|$)");
            if(arr=window.document.cookie.match(reg)){
                let val = JSON.parse(this.uncompile(arr[2]))
                return val;
            }else{
                return null;
            }

        },
        remove: function (key) {
            let newkey = prefix + key;
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            let cval = this.get(key);
            if(cval!=null)
                window.document.cookie= newkey + "="+cval+";expires="+exp.toGMTString()+";path="+'/';
        },
        clear: function () {
            window.document.cookie = '';
        },
        //这是有设定过期时间的使用示例：
        //20s是代表20秒
        //h是指小时，如12小时则是：12h
        //d是天数，30天则：30d
        getsec: function (str) {
            let str1=str.substring(0,str.length-1)*1;
            let str2=str.substring(str.length-1,str.length);
            if (str2=="s")
            {
                return str1*1000;
            }
            else if (str2=="h")
            {
                return str1*60*60*1000;
            }
            else if (str2=="d")
            {
                return str1*24*60*60*1000;
            }
        },
        compile: function(code){
            return escape(code);
        },
        uncompile: function(code){
            return unescape(code);
        }
    },
    propTypes: {
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
        time: PropTypes.string.isRequired,
        autoSave: PropTypes.bool
    },
    getDefaultProps: function(){
        return {
            useRaw: false,
            autoSave: true
        };
    },
    save: function(){
        Cookie.set(this.props.name, this.props.value, this.props.time);
    },
    componentWillUpdate: function(){
        if(this.props.autoSave){
            this.save();
        }
    },
    componentWillMount: function () {
        this.save();
    },
    render: function () {
        return null;
    }
});

export default Cookie;