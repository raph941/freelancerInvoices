var imgTop_dataURI = "data:image/png;base64,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";


var imgBottom_dataURI = 'data:image/png;base64,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';

var imgHeart_dataURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHfSURBVHgBvZY/T9tQFMXPuaF1K1UVabujbjSqWlWicxe6pkvXMnVmgW/AzMQKC6x8A1jCF0CJRAAxQFb+iAgYsBW/y3tPEEwwsQ2Y3+LEPr7n+ere+x6R4M1pe0x7Og2yDmIMio69NiiYu6zWOhjg9cXON4Zm2up+OT2VTaU2B/W8+REc7dRR0UWojg4GI9mFiWcvP31d7i/ouD2lxCJSGNSz/wUGe8ggFkz2qrUNvyAxq3n14v5ojHXkYES56lIEmvk8+kqMJXflq9Pdf2LiJeTkOu/f8+p7In9F4t4fFKCIgWPEmLpNFwu9VBhbeeJLtUxsfMELIL7hSsT1jE0XD1AiqtoUQjdQJkZbxP7maPA+OERJKGVC8PlH12augXJoRB/GW766KPofJWCnsY/rTdxYFuUMnhHF7bhn8kFw0najewpPZzn8WOtn504zugeqaOIpqHbenoWzyVv3Oj46D387IR5pwAonu76YbmGa1m9isa7bRs0/164N0rZpPvROIaMhBkNNchvZ2UTqz4cMMk0c/kQSWaOUA4ZDA5mI3o23hsXIHPUugF1peg8JZ7IMcpk4bCpW7JoXkvdcs4XVLwt4boKT7TXbsFFwvJV5fEpSaGe8mXGuklAm/txVkCuXgtFXet4eKgAAAABJRU5ErkJggg==';


var imgLogo_dataURI = 'data:image/png;base64,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';


document.querySelector('form').addEventListener('submit', function (event) {
    /**
     * invoiceId
     * 
     * companyName
     * companyAddress
     * companyCity
     * companyCountry
     * 
     * //
     * invoiceDate
     * dueDate
     * 
     * //
     * clientName
     * clientAddress
     * clientCity
     * clientCountry
     * 
     * //
     * feedback
     * paymentMethod
     * 
     */
});

var theForm = document.querySelector('#invoice-form');

theForm.addEventListener('submit', function (event) {
    const values = new FormData(theForm);
    console.log(values)
    event.preventDefault();

    var listItem = [];
    var listItemSend = [];


    var alreadyAddedDiv = document.querySelectorAll("#rowsContainer > div");

    if (alreadyAddedDiv.length) {
        alreadyAddedDiv.forEach((oneItem) => {
            let oneItemValues = [];

            oneItem.querySelectorAll('div').forEach(valueDiv => {
                oneItemValues.push(valueDiv.innerText);

                if (oneItemValues.length > 4) oneItemValues.pop();
            });

            listItem.push(oneItemValues);

            let oneItemValuesSend = {
                "description": oneItemValues[0],
                "rate": oneItemValues[1],
                "quantity": oneItemValues[2],
                "price": oneItemValues[3],
            };

            listItemSend.push(oneItemValuesSend);
        });
    }
    else {
        /*alert("Please Add Product description details");
        return;*/
    }




    /**
    * Begining of the program
    */
    var doc = new jsPDF()
    var data = {
        id: values.get("invoiceId"),
        invoiceDate: values.get("invoiceDate"),
        dueDate: values.get("dueDate"),
        name: values.get("clientName"),
        subTotal: document.querySelector('#subTotal').innerText,
        total: document.querySelector('#total').innerText,
        taxes: document.querySelector('#taxes').innerText,
        addressClient: `${values.get("clientAddress")}, ${values.get("clientCity")} \n${values.get("clientCountry")}`,
        address: `${values.get("companyAddress")}, ${values.get("companyCity")} \n${values.get("companyCountry")}`,
        phone: '701-273-7854\n701-325-896',
        web: 'info@design.com\nwww.designbest.com',
        toDoList: listItem,
        paymentMethod: values.get("paymentMethod"),
        feedback: values.get("feedback"),
    }



    /**
     * Add Images
     */
    // image top
    doc.addImage(imgTop_dataURI, 'png', 19, 0, 189, 38)

    // image bottom
    doc.addImage(imgBottom_dataURI, 'png', 26, 284, 165, 13)

    // image logo
    doc.addImage(imgLogo_dataURI, 'png', 15, 260, 43, 17)

    /**
     * title & ID invoice
     */
    //title
    doc.setFontSize('20')
    doc.setFontStyle('bold')
    doc.text('INVOICE', 160, 35)

    // ID invoice                                           
    doc.setFontStyle('regular')
    doc.text(`#0${data.id}`, 174, 45)                        // Variable

    /**
     * entitled bill
     */
    // bill to and date
    doc.setFontSize('14')
    doc.text('Bill to Ms/M.', 20, 62)
    doc.text('Invoice Date', 134, 62)
    doc.text('Due Date', 141, 70)

    doc.setFontStyle('bold')
    doc.text(`${data.invoiceDate}`, 170, 62)                       // Variable
    doc.text(`${data.dueDate}`, 170, 70)                       // Variable

    // Name client
    doc.text(`${data.name}`, 20, 70)                 // Variable (max with issue, use character lenght with for)
    doc.setFontStyle('regular')
    doc.text(`${data.addressClient}`, 20, 78)                     // Variable (max with issue, use character lenght with for)


    /**
     * table by autotabe plugin (module)
     */
    // use of autotoble

    var columns = ['Product Description', 'Rate', 'Qty.', 'Price'];


    doc.autoTable(
        {
            head: [columns],
            body: data.toDoList,
            startY: 95,
            margin: { left: 20, right: 20 },
            theme: 'plain',
            columnStyles: {
                0: { halign: 'left' },
            },
            styles: {
                fontSize: 14,
                minCellHeight: 15,
                halign: 'center',
                valign: 'middle',
            },
        }
    );

    var heightLine = 90 + 17.5;

    // line
    doc.setDrawColor(237, 162, 119)

    doc.setLineWidth(1)
    doc.line(15, heightLine, 195, heightLine);



    var heightTable1 = (data.toDoList.length + 2) * 15;

    //console.log(data.toDoList.length);

    var headRow = ['Payements Methods', 'SubTotal', `${data.subTotal}`];
    var footRow = [`      ${data.feedback}`, 'Total', `${data.total}`];
    var totalRows = [data.paymentMethod, 'Tax Rate (10%)', `${data.taxes}`];

    doc.autoTable(
        {
            head: [headRow],
            foot: [footRow],
            body: [totalRows],

            startY: heightTable1 + 90,
            //padding: { left: 20, right: 20},
            theme: 'plain',
            styles: {
                fontSize: 14,
                minCellHeight: 10,
            },
            bodyStyles: {
                minCellHeight: 15,
                valign: 'top',
            },
            footStyles: {
                fillColor: [242, 242, 242],
                minCellHeight: 15,
                valign: 'middle',
            }
        }
    )


    heightLine = heightTable1 + 90 + 40;

    // line
    doc.setDrawColor(237, 162, 119)

    doc.setLineWidth(1)
    doc.line(15, heightLine, 195, heightLine);


    // image HEART
    doc.addImage(imgHeart_dataURI, 'png', 18, heightLine - 10, 5, 5)

    /**
     * Address and contact
     */
    // Address
    doc.setFontStyle('bold')
    doc.setFontSize('15')
    doc.text('Address', 68, 265)

    doc.setFontStyle('regular')
    doc.text(`${data.address}`, 68, 275)


    // Phone
    doc.setFontStyle('bold')
    doc.setFontSize('15')
    doc.text('Phone', 110, 265)

    doc.setFontStyle('regular')
    doc.text(`${data.phone}`, 110, 275)



    // Phone
    doc.setFontStyle('bold')
    doc.setFontSize('15')
    doc.text('Web', 150, 265)

    doc.setFontStyle('regular')
    doc.text(`${data.web}`, 150, 275)

    var formSend = new FormData();
    formSend.append('due_date', data.dueDate);
    formSend.append('invoice_date', data.invoiceDate);
    formSend.append('company_name', values.get("companyName"));
    formSend.append('company_address', values.get("companyAddress"));
    formSend.append('company_country', values.get("companyCountry"));
    formSend.append('company_city', values.get("companyCity"));

    formSend.append('client_name', values.get("clientName"));
    formSend.append('client_address', values.get("clientAddress"));
    formSend.append('client_country', values.get("clientCountry"));
    formSend.append('client_city', values.get("clientCity"));

    formSend.append('invoice_items', listItemSend);
    formSend.append('subtotal', data.subTotal);
    formSend.append('sales_tax', data.taxes);
    formSend.append('note', data.feedback);
    formSend.append('terms', data.paymentMethod);

    // Preview and Downloading
    window.open(doc.output('bloburl'), '_blank');
});


// Send Data to server when user clicks on the save button.

$('.save__btn').click(function(){
    const values = new FormData(theForm);
    console.log(values)
    event.preventDefault();

    var listItem = [];
    var listItemSend = [];


    var alreadyAddedDiv = document.querySelectorAll("#rowsContainer > div");

    if (alreadyAddedDiv.length) {
        alreadyAddedDiv.forEach((oneItem) => {
            let oneItemValues = [];

            oneItem.querySelectorAll('div').forEach(valueDiv => {
                oneItemValues.push(valueDiv.innerText);

                if (oneItemValues.length > 4) oneItemValues.pop();
            });

            listItem.push(oneItemValues);

            let oneItemValuesSend = {
                "description": oneItemValues[0],
                "rate": oneItemValues[1],
                "quantity": oneItemValues[2],
                "price": oneItemValues[3],
            };

            listItemSend.push(JSON.stringify(oneItemValuesSend));
        });
    }
    else {
        /*alert("Please Add Product description details");
        return;*/
    }
    console.log()

    var request = new XMLHttpRequest();

    request.open('POST', '/invoice/save/');
    
    var formSend = new FormData();
    formSend.append('due_date', values.get("dueDate"));
    formSend.append('invoice_date', values.get("invoiceDate"));
    formSend.append('company_name', values.get("companyName"));
    formSend.append('company_address', values.get("companyAddress"));
    formSend.append('company_country', values.get("companyCountry"));
    formSend.append('company_city', values.get("companyCity"));

    formSend.append('client_name', values.get("clientName"));
    formSend.append('client_address', values.get("clientAddress"));
    formSend.append('client_country', values.get("clientCountry"));
    formSend.append('client_city', values.get("clientCity"));
   
    formSend.append('invoice_items', listItemSend);
    formSend.append('subtotal', document.querySelector('#subTotal').innerText);
    formSend.append('sales_tax', document.querySelector('#taxes').innerText);
    formSend.append('feedback', values.get("feedback"));
    formSend.append('terms', values.get("paymentMethod"));

    formSend.append('csrfmiddlewaretoken', $('#data-store').attr('csrf'));

    request.send(formSend)

    request.onreadystatechange = (e) => {
        var data = request.responseText
        if (data=='{"message": "successful"}') {           
            $('.general-alerts').html(
                '<div class="alert alert-success alert-dismissible fade show" role="alert"> Your invoice has been saved, you can view it on your dashboard<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
            );
            $('#invoice-form')[0].reset()
            let today = new Date().toISOString().substr(0, 10);
            document.querySelector(".today").value = today;
            document.querySelector(".today2").value = today;
        }
        else{
            $('.general-alerts').html(
                '<div class="alert alert-danger alert-dismissible fade show" role="alert"> An error occured please try again <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
            );
        }
    }

    

})