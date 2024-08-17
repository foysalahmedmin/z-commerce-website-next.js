const Support = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <div className="mb-4">
        <strong className="inline-block text-xl">Support</strong>
      </div>
      <div className="space-y-2">
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <span className="inline-block hover:text-primary">
          exclusive@gmail.com
        </span>
        <br />
        <span className="inline-block hover:text-primary">
          +88015-88888-9999
        </span>
      </div>
    </div>
  );
};

export default Support;
