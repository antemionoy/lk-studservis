import { useState, useEffect } from "react"

const usePhoneMask = (ref) => {
    ref?.addEventListener('input', function (e) {
        let val = e.target.value.replace(/\D/g, '');
        if (val) {
          if (val[0] === '7' || val[0] === '8') {
            val = val.slice(1);
          }
          
          val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
          val = '+7' + (val[2] ? '(' + val[1] + ')' + val[2] : (val[1] ? val[1] : '')) + (val[3] ? '-' + val[3] : '') + (val[4] ? '-' + val[4] : '');
        }
        e.target.value = val;
    });
}

export default usePhoneMask