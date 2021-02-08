<template>
  <div>
    <div class="cardinput">
      <label for="card-element">口座振替</label>
      <br>
      
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
  }),
  methods: {
    getToken:function(){
      // https://qiita.com/y_toku/items/7bfa42793801dfc5415d
      let _this=this;
      _this.stripe
        .createToken('bank_account', {
          country: 'JP',
          currency: 'jpy',
          routing_number: '1100000',
          account_number: '0001234',
          account_holder_name: 'ヤマダハナコ',
          account_holder_type: 'individual',
          // https://masahiro.me/2020/09/stripe-connect%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88%E7%94%A8%E3%81%AE%E9%8A%80%E8%A1%8C%E5%8F%A3%E5%BA%A7/
        })
        .then(function(result) {
          console.log('getTokenするよ');
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