function calculateBMI() {
      const weight = document.getElementById("weight").value;
      const height = document.getElementById("height").value;
      const  result = document.getElementById("result");

      if (weight === "" || height === "") {
        result.innerHTML = "Please enter both weight and height.";
        return;
      }

      var bmi = weight / (height * height);
      bmi = bmi.toFixed(2);

      var message = "Your BMI is " + bmi + ". ";

      if (bmi < 18.5) {
        message += "You are underweight.";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        message += "You have a normal weight.";
      } else if (bmi >= 25 && bmi < 29.9) {
        message += "You are overweight.";
      } else {
        message += "You are obese.";
      }

      result.innerHTML = message;
    }