<template>
  <div>
    <div class="cardinput">
      <label for="card-element">Card</label>
      <br>
      <div id="card-element"></div>
      <br>
    </div>
    <button @click="getToken">トークン取得</button>
    <p>token：{{idToken}}</p>
    <button @click="showLog">tokenをコンソール表示</button>
  </div>
</template>

<script>
import {loadStripe} from '@stripe/stripe-js';

export default {
  data: () => ({
    publishableKey:"pk_test_51IBD8VFDFn7wOoD01z8ZMQWM4iMRRUSr4VBwFFEDbsSeq3xBqadosJ09Gt6iQEVdyHqqhlq0F1YKbrA76vlTwVOo00ae8Epd0m",
    stripe:null,
    cardElement:null,
    idToken:null,
    // https://stripe.com/docs/js/appendix/style
    style:{
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    }
  }),
  methods: {
    getToken:function(){
      let _this=this;
      this.stripe.createToken(this.cardElement).then(function(result) {
        console.log(result);
        _this.idToken=result.token.id;
      });
    },
    showLog:function(){
      console.log(this.idToken);
    },
  },
  mounted: async function(){
    const stripe = await loadStripe('pk_test_51IBD8VFDFn7wOoD01z8ZMQWM4iMRRUSr4VBwFFEDbsSeq3xBqadosJ09Gt6iQEVdyHqqhlq0F1YKbrA76vlTwVOo00ae8Epd0m');
    console.log(stripe);
    this.stripe=stripe;
    let elements = stripe.elements();
    
    var cardElement = elements.create('card', {
      style: {
        base: {
          color: 'black',
          fontWeight: 500,
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {
            color: 'black',
          },
          '::placeholder': {
            color: 'black',
          },
        },
        invalid: {
          iconColor: '#FFC7EE',
          color: '#FFC7EE',
        },
      },
    });
    this.cardElement=cardElement;
    cardElement.mount('#card-element');
  }
}
</script>
<style scoped>
.cardinput{
  width: 600px;
  border: 1px solid;
}
</style>