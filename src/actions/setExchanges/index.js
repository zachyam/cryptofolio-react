export function setExchanges(exchange) {
  return (setExchangesDispatch) =>
    setExchangesDispatch({ type: 'ADD_EXCHANGE', exchange });
}
