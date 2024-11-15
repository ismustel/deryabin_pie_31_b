function calc_hundrend(number_id, res_id){
    let three_digit_number = parseInt(document.getElementById(number_id).value)
    let res = Math.floor(three_digit_number/100)
    document.getElementById(res_id).innerHTML = res
}