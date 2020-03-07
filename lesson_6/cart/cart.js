'use strict'

let tBody = document.querySelector('tbody')
let buttons = document.querySelectorAll('.toBasketBtn')
buttons.forEach(element => {
  element.addEventListener('click', function () {
    let prId = element.dataset.id - 1
    cart.cart_prod[prId].id = element.dataset.id
    cart.cart_prod[prId].price = element.dataset.price
    cart.cart_prod[prId].name = element.dataset.name
    cart.choosedProd = prId
    cart.init()
  })
})
let id1 = {}
let id2 = {}
let id3 = {}
let cart = {
  choosedProd: '',
  tBody: '',

  cart_prod: [
    id1 = {
      id: [''],
      price: [''],
      name: [''],
      qty: [1]
    },
    id2 = {
      id: [''],
      price: [''],
      name: [''],
      qty: [1]
    },
    id3 = {
      id: [''],
      price: [''],
      name: [''],
      qty: [1]
    }
  ],

  init () {
    this.addNewLine(tBody, this.choosedProd)
  },

  addNewLine (tBody, prId) {
    let tr = '<tr>'
    let td = `<td>${this.cart_prod[prId].id}</td>`
    td += `<td>${this.cart_prod[prId].name}</td>`
    td += `<td>${this.cart_prod[prId].price}</td>`
    td += `<td>${this.cart_prod[prId].qty}</td>`
    tr += td
    tr += '</tr>'
    this.tBody = tr 
    this.addToCart()
  },
  addToCart () {
    tBody.insertAdjacentHTML('beforeend', this.tBody)
  }
}
