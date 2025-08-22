document.addEventListener('DOMContentLoaded', () => {
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);
dayjs.locale('pt-br')
const timezone = document.querySelector('#tz')
const hora = document.querySelector('#hour');
const dia = document.querySelector('#day');
const pop_up = document.querySelector('#modal-1');
const timezoneSelect = document.querySelector('#timezone-select');
const apply = document.querySelector('#aplicar');
const openSelector = document.querySelector('#change');

function updateTime(){
    const localTz = timezoneSelect.value;
    const now = dayjs().tz(localTz);

    timezone.textContent = localTz;
    hora.textContent = now.format('HH:mm:ss');
    dia.textContent = `${now.format('dddd')}, ${now.format('DD [de] MMMM [de] YYYY')}`;
}

openSelector.addEventListener('click', () => {
    pop_up.style.display = 'flex';
})
apply.addEventListener('click', () => {
    pop_up.style.display = 'none';
    
    updateTime();
})

setInterval(updateTime, 1000);

updateTime();
})
