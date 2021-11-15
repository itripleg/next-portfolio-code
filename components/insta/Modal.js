import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Modal() {
	const [open, setOpen] = useRecoilState(modalState);
	return (
		<div>
			<Transition.Root show={false} as={Fragment}>
				<Dialog
					className="fixed z-10 inset-0 overflow-y-auto"
					onClose={setOpen}
				>
					<div
						className=" flex items-end justify-center min-h=[800px]
						sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
					>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-100"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							test
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}

export default Modal;
