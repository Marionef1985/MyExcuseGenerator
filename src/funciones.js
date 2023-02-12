      const who = ["The dog", "My grandma", "His turtle", "My bird"];
      const action = ["ate", "peed", "crushed", "broke"];
      const what = ["my homework", "the keys", "the car"];
      const when = [
        "before the class",
        "right on time",
        "when I finished",
        "during my lunch",
        "while I was praying"
      ];

      //function getRandomNumber(arr) {
       // return Math.floor(Math.random() * arr.length)
      //}

      //function getRandomItem(){
      //  return arr[getRandomNumber];
      //}

      function getRandomItem(arr) {
        // get random index value
      const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
      return arr[randomIndex];
      }
      

      