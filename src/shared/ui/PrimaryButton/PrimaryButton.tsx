import Link from 'next/link';
import clsx from 'clsx';

type TButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type TAnchorProps = { href: string } & Omit<
  React.ComponentProps<typeof Link>,
  'href'
>;

export const PrimaryButton: React.FC<TAnchorProps | TButtonProps> = ({
  children,
  ...rest
}) => {
  const buttonClass = clsx(
    'bg-sky-600 shadow-[0 0 0 rgb(8 150 230 / 60%)] py-1 px-1.6 text-gray-300 font-bold rounded-md text-1.4'
  );
  if ('href' in rest) {
    return (
      <a {...rest} className={clsx(buttonClass, rest.className)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...rest}
      className={clsx(buttonClass, rest.className)}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
