$('button').click((event) => {
    event.preventDefault()
    const InputText = $('input').val()
    $('ul').append(`<li>${InputText}</li>`)
    // $(`<li>${InputText}</li>`).appendTo('ul')

    $('input').val('') 
})

$('ul').on('click', 'li', function () {
    $(this).css({ "text-decoration": "line-through" });
});