  // Get all the cells of the table
    cells = document.querySelectorAll('#board td');

    dialog = document.getElementById('imageDialog');
    image0 = document.getElementById('image0');
    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    cellId = '';

  // Add a click event listener to each cell
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      cellId = cell;
      console.log(`Clicked on element with ID ${cellId}`);
      dialog.showModal();
    });
  });

    image0.addEventListener('click', () => {
      cellId.innerHTML = '<img src="white.png">';
      dialog.close();
    });

    image1.addEventListener('click', () => {
      cellId.innerHTML = '<img src="cb.png">';
      dialog.close();
    });

    image2.addEventListener('click', () => {
      cellId.innerHTML = '<img src="cn.png">';
      dialog.close();
    });

    image3.addEventListener('click', () => {
      cellId.innerHTML = '<img src="tb.png">';
      dialog.close();
    });

    image4.addEventListener('click', () => {
      cellId.innerHTML = '<img src="tn.png">';
      dialog.close();
    });

    image5.addEventListener('click', () => {
      cellId.innerHTML = '<img src="rb.png">';
      dialog.close();
    });

    image6.addEventListener('click', () => {
      cellId.innerHTML = '<img src="rn.png">';
      dialog.close();
    });

    image7.addEventListener('click', () => {
      cellId.innerHTML = '<img src="qb.png">';
      dialog.close();
    });

    image8.addEventListener('click', () => {
      cellId.innerHTML = '<img src="qn.png">';
      dialog.close();
    });
    image9.addEventListener('click', () => {
      dialog.close();
    });