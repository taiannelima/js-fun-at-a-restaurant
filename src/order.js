
function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(orderNumber, deliveryOrders) {

  for (var i = deliveryOrders.length - 1; i >= 0; i--) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
  
}

function listItems(deliveryOrders) {
  var items = "";
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(items != "") {
      items = items + ", " +  deliveryOrders[i].item;  
    } else {
      items = deliveryOrders[i].item;  
    }
  }
  return items;
}

function searchOrder(deliveryOrders, itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === itemName) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}






