define(['underscore'], function(undef) {

	/**
	 * CONTAINS (ALL)
	 */
	/**
	 * Array of values contains single value
	 */
	function aCv(container, value) {
		return _.indexOf(container, value) !== -1;
	}

	/**
	 * Array of values contains all values from another Array of values
	 */
	function aCa(container, arr) {
		return _.every(arr, function(val) {
			return aCv(container, val);
		})
	}


	/**
	 * IS IN
	 */

	/**
	 * Single value is IN array
	 */
	function vINa(value, container) {
		return aCv(container, value);
	}

	/**
	 * Array of values is IN another array of values
	 */
	function aINa(arr, container) {
		return aCa(container, arr);
	}

	/**
	 * NOT IN
	 */

	/**
	 * Single value not IN array
	 */
	function vNINa(value, container) {
		return !aCv(container, value);
	}

	/**
	 * Multiple values not IN container
	 */
	function aNINa(arr, container) {
		return _.every(arr, function(v) {
			vNINa(v, container);
		})
	}


	_.mixin({
		/* contains All */
		contains: function(values) {
			if (_.isArray(values)) {
				return function(container) {
					// container array contains values
					return aCa(container, values);
				}

			} else {
				return function(container) {
					// container array contains single value
					return aCv(container, values);
				}
			}
		},

		containsAny: function(values) {
			// values must be array to make sense.
			values = _.isArray(values) ? values : [values];

			return function(container) {
				// container array contains any of the values
				return _.find(values, function(val) {

					return aCv(container, val);

				})
			}
		},

		in: function(container) {
			return function(values) {
				return (_.isArray(values)) ? aINa(values, container) : vINa(values, container);
			}
		},

		notIn: function(container) {
			return function(values) {
				return (_.isArray(values)) ? aNINa(values, container) : vNINa(values, container);
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