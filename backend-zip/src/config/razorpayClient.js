const Razorpay = require('razorpay');

apiKey="rzp_test_BP8SZlVqJOrxb1"
apiSecret="3yTO366X6TsVOwRbF8RAsgC9"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;