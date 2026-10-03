type IconProps = { className?: string };

export function Laurel({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 64" fill="none" aria-hidden="true">
      <path d="M20 62V6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 12c-6-2-10-8-9-16 7 1 11 6 9 16Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 26c-6-2-10-8-9-16 7 1 11 6 9 16Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 40c-6-2-10-8-9-16 7 1 11 6 9 16Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function HeartIcon({ className, filled }: IconProps & { filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.600 15.100L2 22l5.100-1.300A10 10 0 1 0 12 2Zm0 1.800a8.200 8.200 0 1 1-4.200 15.250l-.300-.180-3 .780.800-2.900-.200-.300A8.200 8.200 0 0 1 12 3.800Zm-3.300 4c-.200 0-.500.070-.700.350-.250.280-.950.930-.950 2.260s.970 2.620 1.100 2.800c.140.180 1.900 3 4.700 4.100 2.300.900 2.800.720 3.300.680.500-.050 1.600-.660 1.850-1.300.230-.630.230-1.180.160-1.300-.070-.110-.250-.180-.530-.320-.270-.140-1.600-.800-1.860-.900-.250-.090-.430-.130-.610.140-.180.280-.700.900-.860 1.070-.160.180-.320.200-.590.070-.270-.140-1.150-.420-2.200-1.350-.800-.720-1.360-1.610-1.520-1.880-.160-.280-.020-.420.120-.560.120-.120.270-.320.410-.480.140-.160.180-.270.270-.460.090-.180.050-.340-.020-.480-.070-.140-.610-1.500-.850-2.050-.220-.530-.450-.460-.610-.470l-.410-.010Z" />
    </svg>
  );
}
