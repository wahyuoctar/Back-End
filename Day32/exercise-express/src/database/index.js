const employeeDB = [
  {
    id: 1,
    full_name: "John Doe",
    occupation: "Software Engineer",
    gender: "Male"
  },
  {
    id: 2,
    full_name: "Jane Doe",
    occupation: "Digital Marketer",
    gender: "Female"
  },
  {
    id: 3,
    full_name: "Seto Siseto",
    occupation: "CEO",
    gender: "Male"
  },
]

const userDB = [
  {
    username: "seto",
    password: "password"
  },
  {
    username: "bill",
    password: "password"
  },
  {
    username: "mark",
    password: "password"
  },
]

const posts = [
  {
    userId: 2,
    id: 1,
    location: "Bogor",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde corrupti veniam culpa aliquid nihil.",
    likes: 145092,
    image_url: "https://bit.ly/2jYM25F"
  },
  {
    id: 2,
    userId: 3,
    location: "Bintaro",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ut sint doloremque placeat quas odio cupiditate consectetur corporis libero accusantium. Ipsam, eaque nesciunt asperiores provident porro amet consectetur facere impedit.",
    likes: 200,
    image_url: "https://bit.ly/2Z4KKcF"
  },
  {
    id: 3,
    userId: 4,
    location: "Kalimantan",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus voluptates ut repellendus sapiente, eligendi impedit optio!",
    likes: 3000421,
    image_url: "https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg"
  },
  {
    id: 4,
    userId: 4,
    location: "Tokyo",
    caption: "Keren ya di Tokyo",
    likes: 56001002,
    image_url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  },
  {
    id: 5,
    userId: 3,
    location: "Jakarta",
    caption: "Waduh positif teros cok",
    likes: 11023140,
    image_url: "https://gsilab.id/blog/wp-content/uploads/2021/06/tes-PCR-masih-positif.jpg"
  },
  {
    id: 6,
    userId: 3,
    location: "Depok",
    caption: "Ceritanya with ma wife",
    likes: 203000,
    image_url: "https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
  },
  {
    userId: 2,
    id: 7,
    location: "Bogor",
    caption: "Foto lama nih bos, pas masih di gojek hehe",
    likes: 523,
    image_url: "https://www.beritatrans.com/images/uploads/2019/07/Sukses-ala-Nadiem-Makarim.jpg"
  }
]

const comments = [
  {
    id: 1,
    userId: 1,
    content: "Dimana iki bos ?",
    postId: 1
  },
  {
    userId: 1,
    content: "Ini di upnormal kah ?",
    postId: 1,
    id: 2
  }
]

const users = [
  {
    id: 1,
    userId: 1,
    username: "jokowi",
    fullname: "Joko Widodo",
    followers: 0,
    following: 51123450,
    ava_pic: "https://media.suara.com/pictures/970x544/2021/07/27/69037-presiden-joko-widodo-jokowi-saat-membuka-konferensi-forum-rektor-indonesia-fri-tahun-2021.jpg",
    biography: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, delectus.",
    posting: 0,
    current_city: "Solo, Jawa Tengah"
  },
  {
    id: 2,
    userId: 2,
    username: "nadiem",
    fullname: "Nadiem Makarim",
    followers: 4,
    following: 5945010,
    ava_pic: "https://upload.wikimedia.org/wikipedia/commons/4/4a/KIM_Nadiem_Anwar_Makarim.jpg",
    biography: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, delectus.",
    posting: 1,
    current_city: "DKI Jakarta"
  },
  {
    id: 3,
    userId: 3,
    username: "subianto",
    fullname: "Prabowo Subianto",
    followers: 1,
    following: 421310,
    ava_pic: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Menteri_Pertahanan_Prabowo_Subianto.jpg",
    biography: "Saya hanyalah seorang menteri pertahanan Republik Indonesia. Hidup Pancasila!",
    posting: 2,
    current_city: "DKI Jakarta"
  },
  {
    id: 4,
    userId: 4,
    username: "srimul",
    fullname: "Sri Mulyani",
    followers: 3,
    following: 121010,
    ava_pic: "https://img.okezone.com/content/2021/11/24/320/2506894/sri-mulyani-menteri-keuangan-yang-tak-punya-mobil-meski-berharta-rp46-6-miliar-72iCD8RlnW.jpg",
    biography: "Saya adalah salah satu menteri terbaik di Indonesia",
    posting: 3,
    current_city: "Bandar Lampung, Lampung"
  }
]

module.exports = {
  employeeDB,
  userDB,
  posts,
  comments,
  users
}