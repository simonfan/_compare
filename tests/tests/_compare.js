define(['_compare'], function(undef) {

return function() {
	
	test('_.in(arr)', function() {

		ok(_.in(['banana','apple'], 'banana'));


		ok(_.in(['banana','apple'], ['apple']));

		ok(!_.in(['banana','apple'],'pineapple'));

		ok(_.in(['apple','banana'],['banana','apple']));

		ok(!_.in(['banana','apple'], ['apple','peach']));

		ok(!_.in(['banana','apple'], ['banana','apple','orange']));


		ok(_.in(['banana','apple'], []), 'empty array is in')
	});

	test('_.notIn(arr)', function() {

		ok(_.notIn(['banana','apple'],'avocado'));

		ok(!_.notIn(['banana','apple'], ['pineapple','banana']));

		ok(!_.notIn(['banana','apple'],'apple'))
	});


	test('_.contains(values)', function() {

		ok(_.contains(['avocado','banana','apple'], ['banana','apple']));

		ok(!_.contains(['banana','apple'], ['banana','avocado']));


		ok(_.contains(['banana','apple'], []), 'empty array is contained in any array');

	});


	test('_.containsAny(values)', function() {
		
		ok(_.containsAny(['banana','apple'], ['avocado','banana']));
		ok(!_.containsAny(['banana','apple'], ['avocado','pineapple']))
	})

}
});