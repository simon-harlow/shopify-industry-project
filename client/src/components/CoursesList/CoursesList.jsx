import React, { useRef, useState } from "react";
import {
	Flex,
	Button,
	Card,
	Text,
	Image,
	Link,
	Select,
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	ModalOverlay,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import checked from "../../assets/images/Checkered.png";

function CoursesList() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = useRef(null);
	const toast = useToast();
	const [isPublished, setPublished] = useState(false);
    console.log("is Published bool",isPublished);

	const handlePublish = () => {
		onClose();
		setPublished(true);
		toast({
			title: "Beginner Spanish Course Published",
			status: "success",
			position: "bottom",
			duration: 5000,
			isClosable: true,
		});
	};

	return (
		<>
			<Flex direction="column">
				<Flex
					justifyContent="space-between"
					borderBottom="1px solid grey"
					paddingBottom="20px"
					marginBottom="20px"
				>
					<Flex>
						<Link
							as={NavLink}
							to="/listcourses"
							padding="8px"
							border="1px solid silver"
							borderRadius="5px"
							marginRight="1rem"
						>
							{" "}
							<ArrowBackIcon />{" "}
						</Link>
						<Flex direction="column" alignSelf="center">
							<Text
								fontWeight="700"
								fontSize="20px"
								lineHeight="24px"
							>
								Courses
							</Text>
						</Flex>
					</Flex>
					<Flex gap="1rem">
						<Button
							textAlign="center"
							bg="transparent"
							fontWeight="700"
							_hover={{ bg: "", boxShadow: "lg" }}
						>
							Edit
						</Button>
						<Select
							placeholder="More action"
							width="200px"
							fontWeight="700"
							focusBorderColor="$ShopifyGreen"
						></Select>
						<Link as={NavLink} to="/courses/new">
							<Button
								textAlign="center"
								bg="$ShopifyGreen"
								color="white"
								_hover={{ bg: "", boxShadow: "lg" }}
							>
								+ Add New Courses
							</Button>
						</Link>
					</Flex>
				</Flex>

				<Card w={320} bg="white" rounded="md" boxShadow="md">
					<Flex direction="column">
						<Image src={checked} h="158px" />
						<Flex padding="1rem" direction="column" display="flex">
							<Flex justifyContent="space-between">
								<Text fontSize="xl" fontWeight="bold" mb={2}>
									Beginner Spanish Course
								</Text>
								<Link as={NavLink} to="/editCourse">
									<Text
										fontSize="xl"
										fontWeight="bold"
										mb={2}
									>
										...
									</Text>
								</Link>
							</Flex>
							<Text mb={4}>
								You've finally realized it's not cute to say you
								took Spanish for so long, but can't really say
								anything of value. You're now ready to invest
								the time and money to bypass the headaches and
								all that other noise and commit to Spanish.
							</Text>
							<Flex gap="1rem" justifyContent="space-between">
								<Button
									color="white"
									_hover={{ bg: "", boxShadow: "lg" }}
									boxShadow="md"
									w="fit-content"
									h="2rem"
									padding="0 1rem"
									borderRadius="5px"
									bg={isPublished ? "gray" : "$ShopifyGreen"}
									onClick={onOpen}
                                    isDisabled={isPublished}
								>
									{isPublished ? "Published" : "Publish"}
								</Button>

								<Button
									color="black"
									_hover={{ bg: "" }}
									boxShadow="md"
									w="fit-content"
									h="2rem"
									padding="0 1rem"
									borderRadius="5px"
									bg="transparent"
									cursor="default"
								>
									Draft
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Card>
			</Flex>

			<Modal
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				variant="wide"
				closeOnOverlayClick={false}
				isCentered
			>
				<ModalOverlay backdropFilter="auto" backdropBlur="2px" />
				<ModalContent>
					<ModalHeader borderBottom="1px solid #BABFC3">
						Would you like to publish the following course?
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody borderBottom="1px solid #BABFC3">
						Beginner Spanish Course
					</ModalBody>

					<ModalFooter>
						<Button
							mr={3}
							onClick={onClose}
							_hover={{ bg: "", boxShadow: "lg" }}
						>
							No, Go back
						</Button>
						<Button
							color="white"
							bg="$ShopifyGreen"
							_hover={{ bg: "", boxShadow: "lg" }}
                            onClick={handlePublish}
						>
							Yes, Publish
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default CoursesList;
