const images = [
  {id:1, title: 'ананас', img: './images/ананас.png'},
  {id:2, title: 'банан', img: './images/банан.png'},
  {id:3, title: 'арбуз', img: './images/арбуз.png'},
  {id:4, title: 'вулкан', img: './images/вулкан.png'},
  {id:5, title: 'гомер-симпсон', img: './images/гомер-симпсон.png'},
  {id:6, title: 'гриб', img: './images/гриб.png'},
  {id:7, title: 'дом', img: './images/дом.png'},
  {id:8, title: 'дыня', img: './images/дыня.png'},
  {id:9, title: 'картошка', img: './images/картошка.png'},
  {id:10, title: 'киви', img: './images/киви.png'},
  {id:11, title: 'карта', img: './images/карта.png'},
  {id:12, title: 'кирпич', img: './images/кирпич.png'},
  {id:13, title: 'клубника', img: './images/клубника.png'},
  {id:14, title: 'кокос', img: './images/кокос.png'},
  {id:15, title: 'кошка', img: './images/кошка.png'},
  {id:16, title: 'лиса', img: './images/лиса.png'},
  {id:17, title: 'лук', img: './images/лук.png'},
  {id:18, title: 'морковь', img: './images/морковь.png'},
  {id:19, title: 'автобус', img: './images/автобус.png'},
  {id:20, title: 'бабочка', img: './images/бабочка.png'},
  {id:21, title: 'барабан', img: './images/барабан.png'},
  {id:22, title: 'яблоко', img: './images/яблоко.png'},
  {id:23, title: 'яичница', img: './images/яичница.png'},
  {id:24, title: 'шоколад', img: './images/шоколад.png'},
  {id:25, title: 'шарф', img: './images/шарф.png'},
  {id:26, title: 'черепаха', img: './images/черепаха.png'},
  {id:27, title: 'фотоаппарат', img: './images/фотоаппарат.png'},
  {id:28, title: 'фонарь', img: './images/фонарь.png'},
  {id:29, title: 'улитка', img: './images/улитка.png'},
  {id:30, title: 'троллейбус', img: './images/троллейбус.png'},
  {id:31, title: 'трамвай', img: './images/трамвай.png'},
  {id:32, title: 'трактор', img: './images/трактор.png'},
  {id:33, title: 'телефон', img: './images/телефон.png'},
  {id:34, title: 'телевизор', img: './images/телевизор.png'},
  {id:35, title: 'такси', img: './images/такси.png'},
  {id:36, title: 'сыр', img: './images/сыр.png'},
  {id:37, title: 'стул', img: './images/стул.png'},
  {id:38, title: 'сосна', img: './images/сосна.png'},
  {id:39, title: 'солнце', img: './images/солнце.png'},
  {id:40, title: 'снеговик', img: './images/снеговик.png'},
  {id:41, title: 'снег', img: './images/снег.png'},
  {id:42, title: 'скрепка', img: './images/скрепка.png'},
  {id:43, title: 'скейтборд', img: './images/скейтборд.png'},
  {id:44, title: 'свечка', img: './images/свечка.png'},
  {id:45, title: 'светофор', img: './images/светофор.png'},
  {id:46, title: 'самокат', img: './images/самокат.png'},
  {id:47, title: 'рыба', img: './images/рыба.png'},
  {id:48, title: 'помада', img: './images/помада.png'},
  {id:49, title: 'радуга', img: './images/радуга.png'},
  {id:50, title: 'пицца', img: './images/пицца.png'},
  {id:51, title: 'паутина', img: './images/паутина.png'},
  {id:52, title: 'паук', img: './images/паук.png'},
  {id:53, title: 'паровоз', img: './images/паровоз.png'},
  {id:54, title: 'панда', img: './images/панда.png'},
  {id:55, title: 'пальма', img: './images/пальма.png'},
  {id:56, title: 'очки', img: './images/очки.png'},
  {id:57, title: 'помидор', img: './images/помидор.png'},
  {id:58, title: 'собака', img: './images/собака.png'},
  {id:59, title: 'марио', img: './images/марио.png'},
  {id:60, title: 'фонтан', img: './images/фонтан.png'},
  {id:61, title: 'чебурашка', img: './images/чебурашка.png'},
  {id:62, title: 'чеснок', img: './images/чеснок.png'},
  {id:63, title: 'абакус', img: './images/абакус.png'},
  {id:64, title: 'гармошка', img: './images/гармошка.png'},
  {id:65, title: 'самолёт', img: './images/самолёт.png'},
  {id:66, title: 'якорь', img: './images/якорь.png'},
  {id:67, title: 'топор', img: './images/топор.png'},
  {id:68, title: 'корзина', img: './images/корзина.png'},
  {id:69, title: 'батарейка', img: './images/батарейка.png'},
  {id:70, title: 'медведь', img: './images/медведь.png'},
  {id:71, title: 'колокольчик', img: './images/колокольчик.png'},
  {id:72, title: 'сок', img: './images/сок.png'},
  {id:73, title: 'баклажан', img: './images/баклажан.png'},
  {id:74, title: 'бендер', img: './images/бендер.png'},
  {id:75, title: 'бейсболка', img: './images/бейсболка.png'},
  {id:76, title: 'божья-коровка', img: './images/божья-коровка.png'},
  {id:77, title: 'бочка', img: './images/бочка.png'},
  {id:78, title: 'булавка', img: './images/булавка.png'},
  {id:79, title: 'бумага', img: './images/бумага.png'},
  {id:80, title: 'велосипед', img: './images/велосипед.png'},
  {id:81, title: 'верблюд', img: './images/верблюд.png'},
  {id:82, title: 'вертолёт', img: './images/вертолёт.png'},
  {id:83, title: 'вилка', img: './images/вилка.png'},
  {id:84, title: 'гамбургер', img: './images/гамбургер.png'},
  {id:85, title: 'гитара', img: './images/гитара.png'},
  {id:86, title: 'горы', img: './images/горы.png'},
  {id:87, title: 'дверь', img: './images/дверь.png'},
  {id:88, title: 'дельфин', img: './images/дельфин.png'},
  {id:89, title: 'диван', img: './images/диван.png'},
  {id:90, title: 'динозавр', img: './images/динозавр.png'},
  {id:91, title: 'дождь', img: './images/дождь.png'},
  {id:92, title: 'душ', img: './images/душ.png'},
  {id:93, title: 'ёжик', img: './images/ёжик.png'},
  {id:94, title: 'ёлка', img: './images/ёлка.png'},
  {id:95, title: 'змея', img: './images/змея.png'},
  {id:96, title: 'зонт', img: './images/зонт.png'},
  {id:97, title: 'кактус', img: './images/кактус.png'},
  {id:98, title: 'кенгуру', img: './images/кенгуру.png'},
  {id:99, title: 'кит', img: './images/кит.png'},
  {id:100, title: 'ключ', img: './images/ключ.png'},
  {id:101, title: 'книги', img: './images/книги.png'},
  {id:102, title: 'компас', img: './images/компас.png'},
  {id:103, title: 'кран', img: './images/кран.png'},
  {id:104, title: 'крокодил', img: './images/крокодил.png'},
  {id:105, title: 'кукуруза', img: './images/кукуруза.png'},
  {id:106, title: 'лимон', img: './images/лимон.png'},
  {id:107, title: 'линейка', img: './images/линейка.png'},
  {id:108, title: 'ложка', img: './images/ложка.png'},
  {id:109, title: 'лягушка', img: './images/лягушка.png'},
  {id:110, title: 'мёд', img: './images/мёд.png'},
  {id:111, title: 'метла', img: './images/метла.png'},
  {id:112, title: 'молоток', img: './images/молоток.png'},
  {id:113, title: 'мороженое', img: './images/мороженое.png'},
  {id:114, title: 'мышка', img: './images/мышка.png'},
  {id:115, title: 'мышь', img: './images/мышь.png'},
  {id:116, title: 'огнетушитель', img: './images/огнетушитель.png'},  
  {id:117, title: 'ноутбук', img: './images/ноутбук.png'},  
  {id:118, title: 'ножницы', img: './images/ножницы.png'},  
  {id:119, title: 'нож', img: './images/нож.png'},  
  {id:120, title: 'наушники', img: './images/наушники.png'},  
  {id:121, title: 'мяч', img: './images/мяч.png'},
  {id:122, title: 'звезда', img: './images/звезда.png'}
]

let cardNum = 0
let result = 0

function randomList() { 
  let randomId = []

  for (var t = 0; t < cardNum; t++) {
    rand()
  }

  function rand() {
    let ran = images[Math.floor(Math.random() * images.length)]
    if(randomId.indexOf(ran) === -1) {
    randomId.push(ran)
    }else {
      rand()
    }
  }
  
  const toHTML = random => `
  <div class="cardimg col-auto">
    <div class="card">
      <div class="list ${random.title}">
        <img
          src="${random.img}"
          class="card-img-top"
          alt="${random.title}"
          data-id="${random.id}"
          data-title="${random.title}"
          onmousedown="setimg(this)"
        />
      </div>
    </div>
  </div>
`

  function render() {
    const html = randomId.map(random => toHTML(random)).join('')
    document.querySelector('.img-add').innerHTML = html
  }

  render()

}

function setimg(element) {

  let elTitle = element.dataset.title
  console.log(elTitle)
  if(!document.querySelector('.list').classList.contains('opacity')) {
    createModal()
  }else {
    createModalInput()
    document.getElementById('modal-ok').onclick = function() {
      let val = document.getElementById('myInput').value
      
      if(val === elTitle) {
        document.querySelector(`.${val}`).style.opacity = 1
        document.getElementById('myInput').value = ''
        result++
        
      }else {
        createModalFail()
      }
    }
  }
}



document.addEventListener('click', event => { 
  event.preventDefault() 
  const btnType = event.target.id
  if(btnType === 'modal-ok') {
    document.querySelectorAll('.modal').forEach(e => {
      if(e.style.display === 'block') {
        e.style.display = 'none'
      }
    })
  }
  if(btnType === 'btnStart') {
    start()
  }
  if(btnType === '12img') {
    cardNum = 12
    randomList()
  }
  if(btnType === '18img') {
    cardNum = 18
    randomList()
  }
  if(btnType === '24img') {
    cardNum = 24
    randomList()
  }
  if(btnType === '36img') {
    cardNum = 36
    randomList()
  }
  if(btnType === 'btnResult') {
    resultat()
  }
  if(btnType === 'icons') {
    window.open("https://icons8.com/", "_blank")
  }
})

function start() {
  if(document.querySelectorAll('.list').length > 0 && !result > 0){ 
    document.querySelectorAll('.list').forEach(el => {
      el.classList.add('opacity')
      el.style.opacity = 0 
    })
  }else {
    createModalNoimg()
  }

}

function createModal() {
  document.getElementById('modal-start').style.display = 'block'
}

function createModalNoimg() {
  document.getElementById('modal-noimg').style.display = 'block'
}

function createModalInput() {
  document.getElementById('modal-form').style.display = 'block'

  setTimeout(function() {
    document.getElementById('myInput').focus()
  }, 100)
}

function createModalFail() {
  
  setTimeout(function() {
  document.getElementById('modal-fail').style.display = 'block'
  },200)
  document.getElementById('myInput').value = ''
  
}

function result12() {
  const elem = document.querySelectorAll('.list')
    
  elem.forEach(function(item) {
  item.style.opacity = item ? '1' : '0'
  })
  
  
  setTimeout(function() {
      document.getElementById('modal-result').style.display = 'block'
  }, 200)

  

if(result >= 10){
  let el3 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el3.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 8){
  let el2 = document.querySelectorAll('#one, #two, #three, #four')
      
      el2.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
     
}else if(result >= 6){
  let el1 = document.querySelectorAll('#one, #two, #three')
      
      el1.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 3){
      let el = document.querySelectorAll('#one, #two')
     
      el.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 1) {
  document.querySelector('#one').style.opacity = '1'
      
}else{
   
      let el4 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el4.forEach(function(item) {
          item.style.opacity = item ? '0' : '1'
      })
  }
  
}

function result18() {
  const elem = document.querySelectorAll('.list')
    
  elem.forEach(function(item) {
  item.style.opacity = item ? '1' : '0'
  })
  
  
  setTimeout(function() {
      document.getElementById('modal-result').style.display = 'block'
  }, 200)

  

if(result >= 15){
  let el3 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el3.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 12){
  let el2 = document.querySelectorAll('#one, #two, #three, #four')
      
      el2.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
     
}else if(result >= 8){
  let el1 = document.querySelectorAll('#one, #two, #three')
      
      el1.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 6){
      let el = document.querySelectorAll('#one, #two')
     
      el.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 3) {
  document.querySelector('#one').style.opacity = '1'
      
}else{
   
      let el4 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el4.forEach(function(item) {
          item.style.opacity = item ? '0' : '1'
      })
  }
}

function result24() {
  const elem = document.querySelectorAll('.list')
    
  elem.forEach(function(item) {
  item.style.opacity = item ? '1' : '0'
  })
  
  
  setTimeout(function() {
      document.getElementById('modal-result').style.display = 'block'
  }, 200)

  

if(result >= 20){
  let el3 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el3.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 15){
  let el2 = document.querySelectorAll('#one, #two, #three, #four')
      
      el2.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
     
}else if(result >= 12){
  let el1 = document.querySelectorAll('#one, #two, #three')
      
      el1.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 8){
      let el = document.querySelectorAll('#one, #two')
     
      el.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 4) {
  document.querySelector('#one').style.opacity = '1'
      
}else{
   
      let el4 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el4.forEach(function(item) {
          item.style.opacity = item ? '0' : '1'
      })
  }
}

function result36() {
  const elem = document.querySelectorAll('.list')
    
  elem.forEach(function(item) {
  item.style.opacity = item ? '1' : '0'
  })
  
  
  setTimeout(function() {
      document.getElementById('modal-result').style.display = 'block'
  }, 200)

  

if(result >= 30){
  let el3 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el3.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 25){
  let el2 = document.querySelectorAll('#one, #two, #three, #four')
      
      el2.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
     
}else if(result >= 15){
  let el1 = document.querySelectorAll('#one, #two, #three')
      
      el1.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 10){
      let el = document.querySelectorAll('#one, #two')
     
      el.forEach(function(item) {
          item.style.opacity = item ? '1' : '0'
      })
      
}else if(result >= 5) {
  document.querySelector('#one').style.opacity = '1'
      
}else{
   
      let el4 = document.querySelectorAll('#one, #two, #three, #four, #five')
      
      el4.forEach(function(item) {
          item.style.opacity = item ? '0' : '1'
      })
  }
}

function resultat() {
  if(cardNum == 12) {
    result12()
    document.querySelectorAll('.list').forEach(el => {
      el.classList.remove('opacity') 
    })
    result = 0
  }
  if(cardNum == 18) {
    result18()
    document.querySelectorAll('.list').forEach(el => {
      el.classList.remove('opacity') 
    })
    result = 0
  }
  if(cardNum == 24) {
    result24()
    document.querySelectorAll('.list').forEach(el => {
      el.classList.remove('opacity') 
    })
    result = 0
  }
  if(cardNum == 36) {
    result36()
    document.querySelectorAll('.list').forEach(el => {
      el.classList.remove('opacity') 
    })
    result = 0
  }
}