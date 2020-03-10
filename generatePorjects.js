
imageTitle = ['BREIF',null,'EVAULATION CRITERIAS','HOW TO SUBMIT']

module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  faker.locale = 'tr';
  var photos = [1040,1047,1048,1058,1065,1075,111,134,142,146,144,153,164,175,181,188,193,194,195,198,200,1040,1047,1048,1058,1065,1075,111,134,142,146,144,153,164,175,181,188,193,194,195,198,200,1040,1047,1048,1058,1065,1075,111,134,142,146,144,153,164,175,181,188,193,194]

  return {
    projects: _.times(50, function (n) {
      const price = faker.finance.amount(10, 500);
      return {
        "id": (n * 10) + 2,
        "name": faker.commerce.productName(),
        "imageUrl": 'https://picsum.photos/id/' + faker.random.arrayElement(photos) + '/900/500',
        "image": 'https://picsum.photos/id/' + faker.random.arrayElement(photos) + '/900/500',
        "urlStr": 'https://picsum.photos/id/' + faker.random.arrayElement(photos) + '/900/500',
        "dateAdded": new Date(faker.random.number({max:1581701250312, min:1577826000000})),
        price: price,
        discountPrice: price/2,
        "score": faker.random.number({ max: 5, min: 0, precision: 2 }),
        "views": faker.random.number({ max: 10000, min: 0 }),
        "totalEarnings": faker.finance.amount(0, 80),
        "status": faker.random.arrayElement(['Pending', 'Published']),
        discountText:'%50',
        realPrice:price * 2,
        details:'dwg,max,renders,presentation',
        sectionId:faker.random.number({max:11,min:4}),
        totalArea:faker.random.number({max:60,min:1}),
        numberOfFloors:faker.random.number({max:30,min:5}),
        totalViews:faker.random.number({max:15000,min:0}),
        totalScore:faker.random.number({max:6,min:0,precision:1}),
        architect:faker.name.firstName() + " " + faker.name.lastName()
      }
    }),
    notifications:_.times(50,function (n) {
     return {
      "id":(n),
      "user":faker.name.firstName() + " " + faker.name.lastName(),
      "notification":faker.random.words(5) ,
      "date": faker.date.between(new Date(),new Date(2020,5,10,0,0,0,0))
     }
    }),
    peoples: _.times(50, function(n) {
      return {
        "id":n,
        "image": 'https://picsum.photos/id/' + faker.random.arrayElement(photos) + '/900/500',
        "name":faker.name.firstName() + " " + faker.name.lastName(),
        "score":faker.random.number({ max: 5, min: 0, precision: 2 }),
        "registrationDate":new Date(faker.random.number({max:1581701250312, min:1577826000000})),
        "totalEarnings":faker.finance.amount(0, 80),
        "payments":faker.random.arrayElement(['Pending','Complete']),
        "role":faker.random.arrayElement(['Admin','Architect']),
        "status":faker.random.arrayElement(['Active','Inactive']),
        "rating":faker.random.number({max:500,min:0,precision:1})
      }
    }),
    promotions:_.times(50,function (n) {
      return {
        "id":n,
        "addedBy": faker.name.firstName() + " " + faker.name.lastName(),
        "category":faker.random.arrayElement(['Villa','Housing','Others']),
        "rate":faker.random.number({max:100,min:0,precision:5}),
        "date":new Date(faker.random.number({max:1581701250312, min:1577826000000})),
        "expirationDate":new Date(faker.random.number({max:1581701250312, min:1577826000000}))
      }
    }),
    competitions:_.times(50, function (n) {
      const price = faker.finance.amount(10, 500);
      return {
        "id": (n * 10) + 2,
        "name": `product ${n}`,
        "winner": faker.name.firstName() + " " + faker.name.lastName(),
        "image": 'https://picsum.photos/id/' + faker.random.arrayElement(photos) + '/900/500',
        "deadline": new Date(faker.random.number({max:1581701250312, min:1577826000000})),
        "price": faker.finance.amount(10, 500),
        "numberOfParticipants": faker.random.number({ max: 500, min: 0, precision: 1 }),
        "status": faker.random.arrayElement(['Pending', 'Published']),
      }
    }),
    competitiondate:{
      date:faker.date.between(new Date(),new Date(2020,5,10,0,0,0,0))
  },
    project: {
      images: _.times(10, (n) => {
        const url = 'https://picsum.photos/id/' + faker.random.arrayElement(photos) + '/900/500'
        return {
          small: url,
          medium: url,
          big: url
        }
      })
    },
    messages: _.times(30,(n)=> {
      return {
        id:(n * 10) + 2,
        isRead:faker.random.boolean(),
        contact:faker.name.firstName() + " " + faker.name.lastName(),
        subject:faker.random.words(2),
        type:faker.random.words(2),
        date:new Date(faker.random.number({max:1581701250312, min:1577826000000}))
      }
    }),
    competitionImages: _.times(4,(n) => {
      return {
        url:'https://picsum.photos/id/' + faker.random.arrayElement(photos) + '/400/400',
        title:imageTitle[n]
      }
    })
  }
}


