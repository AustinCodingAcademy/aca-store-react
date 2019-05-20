
const {
    header,
    newComments,
    newTasks,
    newOrders,
    tickets,
    orders,
    taskItem,
    tasks,
    messages,
    } = state;
    
    ReactDOM.render(
      <App 
        header={header}
        dateTime={dateTime}
        newComments={newComments}
        newTasks={newTasks}
        newOrders={newOrders}
        tickets={tickets}
        orders={orders} 
        tasks={tasks}
        messages={messages}
        />,
      document.getElementById("root")
    );