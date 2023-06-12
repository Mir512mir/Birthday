

    function checkDate() {
        // получаем строку которую пользователь ввел
        let dateString = document.getElementById("date").value;
        // узнаем текущую дату
        let nowDate = new Date();
        // Разбиваем на три чати введенную дату (месяц, день, год)
        // Это нужно,так как js первую цифру считает месяцем, а вторую днем, а нам нужно чтобы первая была днем, а вторая месяцем
        let dateParts = dateString.split("/");

        // если частей не три, значит ввели что-то не так
        if (dateParts.length !== 3) {
            alert('Неверный формат даты')

            return
        }

        // если js не может распарсить дату, значит введена не дата, а так что-то
        if (isNaN(Date.parse(dateString)) !== false) {
            alert('Неверный формат даты1')

            return
        }

        // Составляем дату из частей которые получили
        let enteredDate = new Date(dateParts[2], dateParts[1] - 1, +dateParts[0]);

        // Проверяем что даты точно равны
        // Но если нужно узнать что сегодня у чела день рождения, я бы убрал проверку года, так как он может ввести
        // дату своего дня рождения, а нам надо только проверить в этом случае только месяц и день
        if (
            enteredDate.getFullYear() === nowDate.getFullYear() &&
            enteredDate.getDay() === nowDate.getDay() &&
            enteredDate.getMonth() === nowDate.getMonth()
        ) {
            alert('Поздравляем у вас сегодня день рождения')
        }
    }