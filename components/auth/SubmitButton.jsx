export default function SubmitButton({ text, pending }) {
  return (
    <button
      type="submit"
      className="btn-primary w-full mt-4"
      disabled={pending}
    >
      {pending ? "wait..." : text}
    </button>
  );
}
