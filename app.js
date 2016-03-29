import Vue from 'vue'
import ShowImage from './components/ShowImage.vue'
new Vue({
    el: '#app',
    components:{
        myImage:ShowImage
    },
    data(){
        return {
            image_url_data:[{url:'./img/pic-1.jpeg'},{url:'./img/pic-2.jpeg'},{url:'./img/pic-3.jpg'},{url:'./img/pic-4.jpg'}]
        }
    }
});