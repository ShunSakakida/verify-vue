<template>
  <div>
    <label for="card-element">Card</label>
    <div id="card-element"></div>
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
    this.stripe=stripe;
    let elements = stripe.elements();
    let cardElement = elements.create('card');
    this.cardElement=cardElement;
    cardElement.mount('#card-element');
  }
}
</script>