var AWS = require('aws-sdk');

AWS.config.update({
	accessKeyId: process.env.awsAccessKeyId,
	secretAccessKey: process.env.awsSecretAccessKey
});

AWS.config.update({region: 'us-west-2'});


var s3bucket = new AWS.S3 ({params: {Bucket: 'mongofiles11'}});
s3bucket.createBucket(function() {
  var params = {Key:'newFIle', Body: 'Hello!'};
  s3bucket.upload(params, function(err,data) {
  	if(err) {
  		console.log('error uploading data: ' + err);
  	}
  	else {
  		console.log('successfully uploaded data to bucket')
  	}
  })
})