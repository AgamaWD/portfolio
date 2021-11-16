const tooltip = document.createElement('div');
tooltip.innerHTML = "<span style='display: block; color:rgb(238, 239, 241); font-size:0.9rem; line-height: 1.7; text-align: center; border-radius: 5px; width: 100px; background-color: rgb(50,50,50);'>Скопировано!</span>"

async function copy(event, id) {
    const text = document.getElementById(id).innerText
    try {
        await navigator.clipboard.writeText(text);
        tooltip.style.position = 'fixed';
        tooltip.style.zIndex = '1100';
        tooltip.style.top = `${event.clientY-45}px`;
        tooltip.style.left = `${event.clientX-50}px`;
        document.body.appendChild(tooltip);
        setTimeout(() =>  {document.body.removeChild(tooltip)}, 600);
      } catch (err) {
        console.error('Ошибка копирования в буфер: ', err);
      }
}