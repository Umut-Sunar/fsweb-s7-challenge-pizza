import { OilBarrelSharp } from "@mui/icons-material"
const product= 

              {            
              productType:'Pizza',
              name:'Position Absolute Acı Pizza',
              price: 85.50,
              star: 4.9,
              commentNumber:200,
              title:`Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza
              ,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında 
              yüksek sıcaklıkla pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamudan oluşan İtalyan kökenli lezzetli bir yemektidir. Küçük bir
              pizzaya bazen pizzetta denir. `,
              selections : {
              
                            Boyut: ['Küçük','Orta','Büyük'],
                            Hamur: ['İnce','Orta', 'Pufidik'],
                            'Ek Malzemeler': ['Pepperoni', 'Sosis','Tavuk Izgara','Mısır','Sarımsak', 'Kabak','Biber','Soğan','Sucuk','Kanada Jambonu','Domates','Jalepeno','Ananas','Jambon'],
              },
              addtionalsPrice: 5 , 
              orderFormNotePlaceHolder :'Siparişinize eklemek istediğiniz bir not var mı? '
              
              
              }
              
              
              
              
              
              
  


const form = {

productname :"pizza",
productChoice: [{Hamur:1},{size:2}]
}


const result = form.productChoice.some( (each) => Object.keys(each).some((key)=>  (Object.keys( product.selections).some((eachs) => eachs===key)   )) )


console.log(result)