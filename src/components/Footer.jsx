const footerNav = [
  "About Us",
  "Editorial Process",
  "Privacy Policy",
  "Terms of Use",
  "Careers",
  "Content Licensing",
  "Anti-Racism Pledge",
  "Product Vetting",
  "Advertise",
  "Contact",
];

const Footer = () => {
  return (
    <footer className='mt-[1.25rem] leading-[1.266rem] bg-[#292929] text-[15px] py-[2.625rem] px-[0.875rem]'>
      <div>
        <div className='container mx-auto'>
          <div className='mb-[0.875rem] text-[15px] text-white'>
            <ul className='flex flex-wrap gap-4 items-center justify-center'>
              {footerNav.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
