export const APIPermissions = {
	// Bots
	Read: 1 << 0, // 1
	Edit: 1 << 2, // 4
	Delete: 1 << 3, // 8

	// Tags
	CreateTags: 1 << 4, // 16
	DeleteTags: 1 << 5, // 32
	EditTags: 1 << 6, // 64

	// Reviews
	DeleteReviews: 1 << 7, // 128

	//Replies
	DeleteReplies: 1 << 8, // 256

	// Users
	BanMembers: 1 << 9, // 512

	// Manage bots
	ApproveBots: 1 << 10, // 1024
	RejectBots: 1 << 11, // 2048
	Administrator: 1 << 12, // 4096
};

/**
 * The enum for the new api's permission system
 * It's implementation is still in progress since API is WIP.
 *
 * @example ```ts
 * ctx.user.roles: APIRoles[] = [APIRoles.USER] // Common permissions, submit bots, etc.
 * ```
 */
export enum APIRoles {
	USER = "user", // Submit bots, delete own bots, add co-owner, edit own bots
	REVIEWER = "reviewer", // Reject/Approve bots + User permissions
	ADMIN = "administrator", // Reviewer permissions + delete bots etc
	DEV = "developer", // All the above
}
