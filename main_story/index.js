function setupCanvas() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let drawing = false;

    canvas.addEventListener('mousedown', () => {
        drawing = true;
        ctx.beginPath();
    });

    canvas.addEventListener('mousemove', (event) => {
        if (!drawing) return;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#CDE958';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => {
        drawing = false;
    });

    canvas.addEventListener('mouseout', () => {
        drawing = false;
    });
}

setupCanvas();
window.addEventListener('resize', setupCanvas);