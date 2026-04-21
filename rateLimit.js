async function rateLimit(ip, reqs) {
  let time = 0;
  const limitRequest = 5;

  if (String(ip).length >= 45) {
    return `IP address not recognized`;
  }
  
  const timeOut = new Promise((resolveRequest, rejectRequest) => {
    const interval = setInterval(() => {
      ++time;

      if (time == reqs && reqs === limitRequest) {
        clearInterval(interval);
        return rejectRequest(`ip blocked request 400`);
      }

      if (time == reqs) {
        const clean = String(ip)
          .replace(/\D/g, "")
          .replace(/^(\d{1,3})(\d{1,3})(\d{1,3})(\d{1,3})$/, "$1.$2.$3.$4");

        clearInterval(interval);
        return resolveRequest(clean + `autorized request`);
      }
    }, 1000);
  });

  try {
    return await timeOut;
  } catch (err) {
    return err;
  }
}
