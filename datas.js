const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla.";

const datas = [
    {
        id: 1,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "SONY",
        image : require("./assets/camera.jpeg"),
        content : content,
    },
    {
        id: 2,
        category_id: 1,
        name: "Sony A7S V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Canon",
        category_name: "Canon",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    {
        id: 3,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "FUJIFILM",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    {
        id: 4,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "LUMIX",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    {
        id: 5,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "SIGMA",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    {
        id: 6,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "TAMRON",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    {
        id: 7,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "Camera",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    {
        id: 8,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "Camera",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    {
        id: 9,
        category_id: 1,
        name: "Sony A7R V",
        price_6h: 350000,
        price_12h: 500000,
        price_24h: 650000,
        brand: "Sony",
        category_name: "Camera",
        image : "https://id.images.search.yahoo.com/images/view;_ylt=AwrPrjEMOTRng.4Kc8bNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRjNmE1NmVjZWIyYTJiYzUwM2QyODkzYTNmNDJhZTNjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsony%2Ba7r%2BV%26type%3DE211ID714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=474&h=315&imgurl=www.canbuyornot.com%2Fwp-content%2Fuploads%2F2023%2F01%2FSony_A7RV-1.jpg&rurl=https%3A%2F%2Fwww.canbuyornot.com%2Freviews%2Fsony-a7r-v-review-price%2F&size=224KB&p=sony+a7r+V&oid=4c6a56eceb2a2bc503d2893a3f42ae3c&fr2=piv-web&fr=mcafee&tt=Sony+A7R+V+review%3A+AI+autofocusing+-+Can+Buy+or+Not&b=0&ni=21&no=3&ts=&tab=organic&sigr=e6eWBlJUYK4H&sigb=k2l1jiwqwnLf&sigi=Di5HOS03rgDP&sigt=wKwoAw65lbxE&.crumb=d97h2goy2Ed&fr=mcafee&fr2=piv-web&type=E211ID714G0",
        content : content,
    },
    

]

export default datas;