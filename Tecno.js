for (var i = 1; i <= 100; i++) {
    function FooBar(num) {
      if (i % 3 === 0 && i % 5 === 0)
        return "FooBar";
      if (i % 3 === 0)
        return "Foo";
      if (i % 5 === 0)
        return "Bar";
      return num;
    }
    console.log(FooBar(i));
  }