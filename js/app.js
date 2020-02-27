function changeCase() {
    let str = document.getElementById('strInput').value;
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for(let i = 0; i < str.length; i++)
    {
        if(UPPER.indexOf(str[i]) === -1)
        {
            result.push(str[i].toUpperCase());
        }
        else if(LOWER.indexOf(str[i]) === -1)
        {
            result.push(str[i].toLowerCase());
        }
        else
        {
            result.push(str[i]);
        }
    }
    document.getElementById('result').innerHTML = result.join("");
}
