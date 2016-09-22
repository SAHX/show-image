<template>
    <div class="img_box">
        <img :src="img_min_url" alt="image" id="img_{{index}}">
    </div>
</template>
<style>
    .img_box{
        border: dashed #8c92a3 2px;
        margin-bottom: 20px;
        border-radius:5px;
        overflow: hidden;
    }
    .img_box img{
        position: relative;
    }
    @import "./lib/viewer.min.css";
</style>
<script>
    import Viewer from './lib/viewer.min'
    export default{
        ready(){
            var self = this;
            new Viewer(document.getElementById('img_'+this.index),{
                url:function(){return self.img_url}
            });
            $('.img_box').css('width',this.set_width+'px');
            $('.img_box').css('height',this.set_height+'px');
            var set_width = this.set_width;
            var set_height = this.set_height;
            var index = this.index;
            var img = new Image;
            img.onload = function(){
                var width = img.width;
                var height = img.height;
                if((width > set_width)&&(height > set_height)){
                    if(width > height){
                        var left = -(width/(height/set_height)-set_width)/2;
                        $('.img_box #img_'+index).attr('style','max-height:100%;max-width:none');
                        $('.img_box #img_'+index).css('left',left);
                    }else {
                        var top = -(height/(width/set_width)-set_height)/2;
                        $('.img_box #img_'+index).attr('style','max-width:100%;max-height:none');
                        $('.img_box #img_'+index).css('top',top);
                    }
                }else {
                    $('.img_box img').attr('style','max-width:none;max-height:none');
                }
            };
            img.src = $('.img_box #img_'+this.index).attr('src');
        },
        props:{ // 声明从父级获取的参数
            set_width:{
                type:Number,
                default:160
            },
            set_height:{
                type:Number,
                default:160
            },
            img_min_url:{ //展示的小图
                type:String,
                required: true
            },
            img_url:{ //查看是的原图
                type:String,
                required: true
            },
            index:{
                type:Number,
                required: true
            }
        }
    }
</script>