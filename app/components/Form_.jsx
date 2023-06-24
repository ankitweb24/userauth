import Link from "next/link";

const Form_ = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <button type="submit" class="btn btn-success w-100">
        Continue
      </button>
      <small className="mt-2 text-center">Already have an account? <Link href={'/login'} className="text-center text-success">Log in</Link> </small>
    </form>
  );
};

export default Form_;
