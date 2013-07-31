define(['_compare'], function(undef) {

return function() {
	
	test('_.in(arr)', function() {
		// is banana or apple function
		var isBananaOrApple = _.in(['banana','apple']);

		ok(isBananaOrApple('banana'));
		ok(isBananaOrApple('apple'));
		ok(!isBananaOrApple('pineapple'));

		ok(isBananaOrApple(['apple','banana']));

		ok(!isBananaOrApple(['apple','peach']));

		ok(!isBananaOrApple(['banana','apple','orange']))
	});

	test('_.notIn(arr)', function() {
		// not banana nor apple
		var notBananaNorApple = _.notIn(['banana','apple']);

		ok(notBananaNorApple('avocado'));

		ok(!notBananaNorApple(['pineapple','banana']));

		ok(!notBananaNorApple('apple'))
	});


	test('_.contains(values)', function() {
		// contains bananas and apples
		var containsBananasAndApples = _.contains(['banana','apple'])

		ok(containsBananasAndApples(['avocado','banana','apple']));

		ok(!containsBananasAndApples(['banana','avocado']));

	});


	test('_.containsAny(values)', function() {
		// contains bananas or apples
		var containsBananasOrApples = _.containsAny(['banana','apple']);


		ok(containsBananasOrApples(['avocado','banana']));
		ok(!containsBananasOrApples(['avocado','pineapple']))
	})

}
});