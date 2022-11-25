<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="Stylesheet" href="Style.css">
<body>
    <div class="container">
        <form>
            <div class="base">
                <div class="enter"><h4>Age Calculator</h4></div>
                <div class="block">
                    <p class="title">Date</p>
                    <input
                        type="text"
                        name="date"
                        id="date"
                        placeholder="dd"
                        required="required"
                        minlength="1"
                        maxlength="2"
                    />
                </div>
                <div class="block">
                    <p class="title">Month</p>
                    <input
                        type="text"
                        name="month"
                        id="month"
                        placeholder="mm"
                        required="required"
                        minlength="1"
                        maxlength="2"
                    />
                </div>
                <div class="block">
                    <p class="title">Year</p>
                    <input
                        type="text"
                        name="year"
                        id="year"
                        placeholder="yyyy"
                        required="required"
                        minlength="4"
                        maxlength="4"
                    />
                </div>
            </div>
            <div class="base">
                <div class="enter">
                    <input
                        type="button"
                        name="submit"
                        value="Submit"
                        onclick="age()"
                    />
                </div>
            </div>
            <div id="age"></div>
        </form>
    </div>
</body>
<script src="Script.js"></script>
</html>
