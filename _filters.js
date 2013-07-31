define(['underscore'], function(undef) {
	_.mixin({
		in: function(arr) {

			return function(values) {

				if (_.isArray(values)) {
					// all the values must be in the array
					return _.every(values, function(val) {
						return _.indexOf(arr, val) != -1;
					});

				} else {
					return _.indexOf(arr, values) != -1;
				}
			}
		},

		notIn: function(arr) {
			return function(values) {
				if (_.isArray(values)) {
					// all the values must NOT be in the array
					return _.every(values, function(val) {
						return _.indexOf(arr, val) === -1;
					});
				} else {
					return _.indexOf(arr, values) === -1;
				}
			}
		},

		higherThan: function(limit) {
			return function(values) {
				if (_.isArray(values)) {
					// all values must be higher than the limit
					return _.every(values, function(val) {
						return val > limit;
					})
				} else {
					return values > limit;
				}
			}
		},

		lowerThan: function(limit) {
			return function(values) {
				if (_.isArray(values)) {
					// all values must be lower than the limit
					return _.every(values, function(val) {
						return val < limit;
					})
				} else {
					return values < limit;
				}
			}
		},
	})
});