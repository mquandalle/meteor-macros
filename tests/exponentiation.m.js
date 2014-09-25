// Define a macro and use it a a global variable. This variable is then checked
// in `tinytest.js`.
operator (**) 14 right
    { $base, $exp } => #{ Math.pow($base, $exp) }

itShouldBe10 = 2 + 2 * 2 ** 2;
