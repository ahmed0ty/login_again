document.getElementById('userName').innerHTML = localStorage.getItem('username')
document.getElementById('logBtn').addEventListener('click',function()
{
    localStorage.removeItem('username')
})