define(['_filters'], function(undef) {

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
	})

}
});