<template>
  <div>
    <stripe-element-card
      ref="elementRef"
      :pk="pulishableKey" 
      @token="tokenCreated"
    >gene</stripe-element-card>
    
  </div>
</template>

<script>
import { StripeElementCard } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeElementCard,
  },
  data () {
    this.pulishableKey = "pk_test_51IBD8VFDFn7wOoD01z8ZMQWM4iMRRUSr4VBwFFEDbsSeq3xBqadosJ09Gt6iQEVdyHqqhlq0F1YKbrA76vlTwVOo00ae8Epd0m";
    return {
      token: null,
    };
  },
  methods: {
    tokenCreated:function(token){
      console.log(token);
      this.token=token;
      // handle the token
      // send it to your server
    },
    showToken:function(){
      console.log(this.token);
    }
  }
};
</script>