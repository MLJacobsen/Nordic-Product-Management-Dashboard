import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchKiidStatus } from '../services/fundService';

function KiidStatus() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKiidStatus().then((data) => {
      setStatus(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse h-24 bg-neutral-100 rounded-xl" data-testid="kiid-loading" />
    );
  }

  const { allCompliant, withKiid, total, fundsMissingKiid } = status;

  return (
    <motion.div
      className={`rounded-xl p-4 ${allCompliant ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      data-testid="kiid-status"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-neutral-800">Nøkkelinformasjon (KIID)</h3>
        <span
          className={`text-2xl font-bold ${allCompliant ? 'text-green-600' : 'text-red-600'}`}
          data-testid="kiid-ratio"
        >
          {withKiid}/{total}
        </span>
      </div>

      {allCompliant ? (
        <p className="text-green-700 text-sm font-medium" data-testid="kiid-compliant">
          ✓ All funds have Nøkkelinformasjon
        </p>
      ) : (
        <div data-testid="kiid-non-compliant">
          <p className="text-red-700 text-sm font-medium mb-1">
            ✗ {fundsMissingKiid.length} fund{fundsMissingKiid.length > 1 ? 's' : ''} missing Nøkkelinformasjon
          </p>
          <ul className="text-red-600 text-xs space-y-0.5">
            {fundsMissingKiid.map((f) => (
              <li key={f.id}>• {f.name}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default KiidStatus;
