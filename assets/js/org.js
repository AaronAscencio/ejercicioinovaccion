let persons = {
    'name': 'Gerente',
    'title': 'Gerente',
    'children': [
    { 'name': 'Subgerente 1', 'title': 'sub1' },
    { 'name': 'Subgerente 2', 'title': 'sub2'},
    ]
}
$("#root").orgchart({
    'data': persons,
});