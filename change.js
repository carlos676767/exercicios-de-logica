function change(s, prog, version) {
    const program = s.match(/Program title:\s*(.*)/)[1];
    const phone = s.match(/Phone:\s*(.*)/)[1];
    const v = s.match(/Version:\s*(.*)/)[1];
    return `Program: ${prog} Author: g964 Phone: ${phone} Date: 2019-01-01 Version: ${version}`;
  }
  //Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0
  console.log(
    change(
      `Program title: Primes
  Author: Kern
  Corporation: Gold
  Phone: +1-503-555-0091
  Date: Tues April 9, 2005
  Version: 6.7
  Level: Alpha`,
      "Ladder",
      "1.1"
    )
  );
  